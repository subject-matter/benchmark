// Example of optimizing queries with projections
const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name, // Only get the name instead of whole author object
  "categories": categories[]->title, // Only get titles
  body[]{
    ...,
    _type == "image" => {
      "url": asset->url, // Only get what you need from images
      "alt": asset->alt
    }
  }
}` 