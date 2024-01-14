import axios from 'axios';
import  Configuration from "openai";
import OpenAIApi from 'openai';
import {fileTypeFromBuffer} from 'file-type';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const img = async(req,res)=>{
    try{
        const obj = req.body;
        let ans;
        const configuration = new Configuration({
            // Enter your api key below,
            apiKey: '',
        });
        const openai = new OpenAIApi(configuration);
        async function callApi(){
            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: `${obj.prompt} in 80 words`,
                max_tokens: 80,
                temperature: 0,
            });
            ans = response.choices[0].text;
        }
        callApi();
        
        // const response = await openai.listEngines();


        console.log("running....")
        console.log(obj)
        const img1 = await axios({
            method:'post',
            //enter your ngrok api key
            url:'',
            data: obj,
            responseType: 'arraybuffer'
        });
        async function savePhotoFromAPI() {

            const buffer = Buffer.from(img1.data);
            const fileType = await fileTypeFromBuffer(buffer);
            if (fileType.ext) {
                const outputFileName = `yourfilenamehere.${fileType.ext}`;
                fs.mkdir(path.join(__dirname,'/images'),{},(err)=>{
                    fs.createWriteStream(outputFileName).write(buffer);
                });
                
            } else {
                console.log('File type could not be reliably determined! The binary data may be malformed! No file saved!')
            }
        }
        savePhotoFromAPI();
        res.end(ans).status(200);
    }catch(err){
         console.log(err);
    }
}
