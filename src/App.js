import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./units/data";
import "./scss/app.scss"

const App = () => {
  console.log(data);
  return (
    <div>
      <Header />
      {data.map(({ id, name, job, comment, img }) => {
        return (
          <Card key={id} isim={name} job={job} comment={comment} img={img} />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
