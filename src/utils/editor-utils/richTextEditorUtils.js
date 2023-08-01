export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'background',
  'align'
]

export const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video',],
    [{ align: 'center' }, { align: 'right' }],
    [
      { color: ['green', 'black', 'white'] },
      { background: ['green', 'black', 'white'] },
    ],
  ],
}
