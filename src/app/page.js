import Image from "next/image"
import Nav from "../../components/nav/Nav"
import hero from "../../public/heroImage.jpg"

export default function Home() {
  return (
    <main>
      <Nav />
      <section id="firstSection">
        <div id="firstSection_top">
          <div>
            <p id="blueText">Unhappy with your website?</p>
            <p id="textTitle">We create beautiful and fast web services</p>
          </div>
          <div>
            <Image src={hero} alt="Hero" />
          </div>
        </div>
        <div id="firstSection_bottom">
          <p>Story, emotion and purpose</p>
          <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
          <form id="firstSection_bottom_form">
            <label htmlFor="email">Want us to contact you?</label>
            <div>
              <input type="text" placeholder="Email"/>
              <button>Join</button>
            </div>
          </form>
        </div>
      </section>
      <section id="secondSection">
        <h2>We offer high demand services</h2>
        <div id="cards-container">
          <div className="card">
            <div id="box-pencil">
              <span class="material-symbols-outlined" id="edit">edit</span>
            </div>
            <h3 className="card-title">
              UI/UX Design
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
            </p>
            <a href="#"> Get started </a>
          </div>
          <div className="card">
            <div id="box-code">
              <span class="material-symbols-outlined" id="code">code</span>
            </div>
            <h3 className="card-title">
            Front End
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
            </p>
            <a href="#"> Get started </a>
          </div>
          <div className="card">
            <div id="box-storage">
              <span class="material-symbols-outlined" id="storage">storage</span>
            </div>
            <h3 className="card-title">
              UI/UX Design
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
            </p>
            <a href="#"> Get started </a>
          </div>
        </div>


      </section>
    </main>
  )
}
