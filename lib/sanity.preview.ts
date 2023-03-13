'use client'

import { definePreview } from 'next-sanity/preview'
import { DefaultPreview } from 'sanity'
import { projectId, dataset } from './sanity.client'

function onPublicAccessOnly(){
    throw new Error('Unable to load preview as youre not logged in')
}

if(!projectId || !dataset){
    throw new Error(
        "Missing projectId or dataset, Check your sanity.json or .env"
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
})

