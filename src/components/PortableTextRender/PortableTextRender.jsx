import React from 'react';
import { PortableText } from '@portabletext/react';

const PortableTextRender = ({ blocks }) => {
    return (
    <PortableText
        value={blocks}
        components={{
            types: {
                image: ({value}) => <figure className='polaroid'><img src={value.asset.url} alt={value.asset.title || ''} />{ value.asset.title ? (<figcaption>{value.asset.title}</figcaption>) : ('') }</figure>,
                code: ({value}) => <pre><code>{value.code}</code></pre>
            },
            marks: {
                link: ({children,value}) => (
                    <a href={value.href} target='_blank' rel='noopener noreferrer'>
                        {children}
                    </a>
                )
            }
        }}
    />
    )
}

export default PortableTextRender