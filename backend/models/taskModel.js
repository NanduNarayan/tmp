import mongoose from "mongoose";

export default taskSchema=mongoose.Schema(
    {
        title:{
            type: 'string',
            required: true,
            minLength:3,
        },
        todos:[
            {
                body:{
                    type:"string",
                    required: true,
                    minLength:3,
                },
                isComplete:{
                    type:'boolean',
                    required: true,
                },
                priority:{
                    type:"string",
                    required: true,
                    maxLength:2
                },
                created_time:{
                    type:'date',
                    required: true,
                    default:Date.now,
                },
                last_modified:{
                    type:'date',
                }
            }
        ]
    }
);