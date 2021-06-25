export default {
  name: "projects",
  title: "Project",
  type: "document",
  fields: [
        { 
            name: "name", 
            title: "Name", 
            type: "string" 
        }, 
        { 
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },      
        },
        { 
            name:'image',
            title:'Images',
            type:'image',
            options:{
                hotspot: true
            }
        },
        { 
            name:'description',
            title:'Description',
            type:'text',
        },
        {
            name:'author',
            title:'Author',
            type:'reference',
            to:{type:'author'}
        }
    ],
    preview:{
        select:{
            title:'name',
            author:'author.name',
            media:'image'
        },
        prepare(selections){
            const {author} =selections;
            return {
                ...selections,
                subtitle:author && `by ${author}`
            }
        }
 
    }

    

};
