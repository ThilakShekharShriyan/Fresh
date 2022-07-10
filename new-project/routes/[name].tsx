/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
