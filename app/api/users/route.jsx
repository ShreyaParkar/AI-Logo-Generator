import { db } from "@/configs/FirebaseConfig"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userEmail, userName } = await req.json()

  try {
    // If user already exists
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data())
    } else {
      // Insert new user
      const data = {
        name: userName,
        email: userEmail,
        credits: 5
      }
      await setDoc(doc(db, "user", userEmail), {
        ...data
      })
      return NextResponse.json(data)
    }
  } catch (e) {
    return NextResponse.json({ error: e.message || 'Something went wrong' }, { status: 500 })
  }
}
