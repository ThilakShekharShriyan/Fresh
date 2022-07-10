/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";


export const handler: Handlers<Project> = {
    async GET(_req, ctx) {
      
        
      //get data
      const id = ctx.params.id;
      const raw_posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await raw_posts.json()
      return ctx.render(post);
    },
  };

export default function Post(props: PageProps) {
    console.log(props)
  return (
    <div class={tw` h-96 bg-blue-300 min-h-screen flex flex-row justify-center items-center`}>
        <div class={tw`bg-blue-400 w-4/6 hover:bg-blue-600 hover:transiton hover:duration-500`}>
            
            <h1>{props.data.id}</h1>
            <h1>{props.data.title}</h1>
            <h1>{props.data.body}</h1>
        </div>
    </div>

  );
}
