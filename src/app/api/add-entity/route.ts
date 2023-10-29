import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const entityName = searchParams.get('entityName');
  const ownerName = searchParams.get('ownerName');
 
  try {
    if (!entityName || !ownerName) throw new Error('Entity and owner names required');
    await sql`INSERT INTO Entity (Name, Owner) VALUES (${entityName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const entities = await sql`SELECT * FROM Entity;`;
  return NextResponse.json({ entities }, { status: 200 });
}
