import Note from "@/app/components/Note";
import Link from "next/link";
import { useState } from "react";

export const dynamic = 'force-dynamic'

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //const [isEditing, setIsEditing] = useState(false)
  // Are we editing this page?
  const isEditing = "edit" in searchParams;
  return (
    <main>
      <div className="container">
        <Note isEditing={isEditing} id="pizza" />
        {isEditing ? (
          <Link href="/example/rsc-test">View Mode</Link>
        ) : (
          <Link href="/example/rsc-test?edit">Edit Mode</Link>
        )}
      </div>
    </main>
  );
}
