/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";



export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    
    //get data
    const raw_posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await raw_posts.json()
    return ctx.render(posts);
  },
  
};

export default function Home(props) {
  console.log(props.data)
  return (
    
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      
     <nav class={tw`flex`}>
     <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <ul class={tw`flex justify-items-end space-x-5`}>
        <li>hello</li>
        <li>yo </li>
      </ul>
     </nav>
      
      <ul>
        <li>{props.data.map((posts)=>(
          <div class={tw`p-5 my-2`}>
            <a href = {`/posts/${posts.id}`}>
            <ul class={tw`flex space-x-2 font-semibold`}>
              <li>{posts.id}</li>
              <li>{posts.title}</li>
            </ul>
            </a>
            <p>{posts.body}</p>
          </div>

        ))}</li>
      </ul>
    </div>
  );
}
