const RenderingSection = () => {
  return (
    <main className=" grid grid-cols-2 w-full p-8">
      <section id="Notes" className="flex flex-col gap-5">
        <h2>Notes</h2>
        <div className="flex flex-col gap-5 ">
            <input type="text" className="bg-light-grayish"/>
            <input type="text" className="bg-light-grayish"/>
            <textarea name="main" id="" cols="30" rows="10" className="bg-light-grayish"></textarea>
        </div>
      </section>
      <section id="Preview">
      <h2 className="flex justify-end mr-10">Review</h2>
      </section>
    </main>
  )
}

export default RenderingSection
