
function Contact() {
  return (
    <div className=" flex flex-col gap-4">
      <h2 className="cursor-pointer" onClick={()=>location = 'https://t.me/Django_fl'}>
        <i className="fa-solid fa-paper-plane"></i> Akchiche Aymen
      </h2>
      <h2><i className="fa-solid fa-mobile-screen text-xl"></i> +213 698841788</h2>
       <div>
       <i className="fa-solid fa-mobile-screen mr-2 text-xl"></i>
       <i className="fa-brands fa-facebook mr-2 text-xl"></i>
       <i className="fa-brands fa-linkedin text-xl"></i>
       </div>
    </div>
  )
}

export default Contact
