import {  AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {prompt,email,title,desc}=await req.json();

    try{
        //Generate AI Text Prompt for Logo
        const AiPromptResult= await AILogoPrompt.sendMessage(prompt);
        console.log(JSON.parse(AiPromptResult.response.text()).prompt)
        const AIPrompt=JSON.parse(AiPromptResult.response.text()).prompt;

        //Generate Logo From AI Model
        const response = await axios.post('https://router.huggingface.co/fal-ai/fal-ai/flux-lora',
            AIPrompt,
            {
                headers: {
				Authorization: "Bearer"+process.env.HUGGING_FACE_API_KEY ,
				"Content-Type": "application/json",
			},
            responseType:"arraybuffer"
            }
        )
        //convert to Base 64 Image
         const buffer=Buffer.from(response.data,"binary");
         const base64Image=buffer.toString("base64");

         const base64ImageWithMime='data:image/png;base64,${base64Image}';
         console.log(base64ImageWithMime)

         //save to Firebase Database
         try{
            await setDoc(doc(db,"users",EmailAddress,"logos",Date.now().toString()),{
                image:base64ImageWithMime,
                title:title,
                desc:desc
            })
         }
         catch(e){

         }
        return NextResponse.json({image:base64ImageWithMime})
        //AI logo Image Modal
    }
    catch(e){
    return NextResponse.json({error:e})
    }
}