export default {
  name: 'threeDModel',
  title: '3D Model',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Model Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'modelFile',
      title: '3D Model File (.glb or .gltf)',
      type: 'file',
    },
    {
      name: 'ModelUrl',
      title: 'Model Url',
      type: 'url',
    },

    {
      name: 'thumbnail',
      title: 'Model Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ThmUrl',
      title: 'Thumbnail Url',
      type: 'url',
    },
  ],
}
