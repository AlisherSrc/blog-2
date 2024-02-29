import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(),'blogposts');

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
    // iteration of all posts
    const allPostsData = fileNames.map((fileName) => {
        // just creating id from the name without .md
        const id = fileName.replace(/\.md/,'');
        
        // full path 
        const fullPath = path.join(postsDirectory,fileName);
        // getting content from the file
        const fileContents = fs.readFileSync(fullPath,'utf8');
        // metadata reading
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        return blogPost;
    })

    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // we don't need to create s
    const blogPostWithHTML:BlogPost & { contentHtml: string} = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    return blogPostWithHTML;
}