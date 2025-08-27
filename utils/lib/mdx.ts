import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypePrism from "rehype-prism-plus"

// const POSTS_PATH = path.join(process.cwd(), "content/mdx")
// const POSTS_PATH = path.join(process.cwd(), "/app/blogs/mdx/")
const POSTS_PATH = path.join(process.cwd(),"/app/projects/mdx/")


export async function getMdx(slug: string) {

  // const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fullPath = path.join(`${slug}.mdx`)
  console.log("fullPath:",fullPath)

  if (!fs.existsSync(fullPath)) {
    const emptyContent = "<p className='text-center'>File Not Found</p>"
    const mdxSource = await serialize(emptyContent)
    return { mdxSource, frontmatter: { title: `No file with name ${slug}` } }
  }

  const source = fs.readFileSync(fullPath, "utf-8")



  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    },
    scope: data,
  })

  return { mdxSource, frontmatter: data }
}
