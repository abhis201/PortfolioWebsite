import fs from 'fs';
import path from 'path';

const BLOG_PATH = path.join(process.cwd(), 'client/content/blog');

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  content: string;
}

function parseFrontmatter(content: string): { frontmatter: any; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(content);

  if (!match) {
    return {
      frontmatter: {},
      content: content,
    };
  }

  const frontmatter = match[1].split('\n').reduce((acc: any, curr) => {
    const [key, ...value] = curr.split(':');
    if (key && value) {
      acc[key.trim()] = value.join(':').trim().replace(/^"(.*)"$/, '$1');
    }
    return acc;
  }, {});

  const contentWithoutFrontmatter = content.replace(frontmatterRegex, '').trim();
  return {
    frontmatter,
    content: contentWithoutFrontmatter,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('Reading blog posts from:', BLOG_PATH);
    const files = fs.readdirSync(BLOG_PATH);
    console.log('Found files:', files);

    const posts = files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => {
        try {
          const filePath = path.join(BLOG_PATH, file);
          console.log('Processing file:', filePath);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { frontmatter, content } = parseFrontmatter(fileContents);
          console.log('Parsed frontmatter:', frontmatter);

          return {
            slug: file.replace(/\.mdx?$/, ''),
            frontmatter,
            content: content, // We'll add markdown parsing once we can install the dependency
          };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
      });

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    console.log('Reading blog post:', filePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, content } = parseFrontmatter(fileContents);

    return {
      slug,
      frontmatter,
      content: content, // We'll add markdown parsing once we can install the dependency
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}