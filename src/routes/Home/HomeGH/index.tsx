import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css"

export default function HomeGH(){
    return (
        <main>
          <section>
              <div className="mt30 mb30 text-home">
                <h1>Desafio Github API</h1>
                <p>DevSuperior - Escola de programação</p>
                <div className="mb30 mt30 dflex">
                    <Link to={"/findProfile"}>
                      <Button text="Começar" />
                    </Link>   
                </div>
              </div>
          </section>
        </main>
      );
}