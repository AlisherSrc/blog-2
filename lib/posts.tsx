import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
