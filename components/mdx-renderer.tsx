"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { components } from "./mdx-components"

export default function MdxRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />
}
