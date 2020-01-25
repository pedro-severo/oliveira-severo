import React from "react";
import { HomeWrapper, FirstFold, HeadlineWrapper } from "./styled";
import { Header } from "../../components/Header";
import Headline from "../../components/Headline";

const foldHeadLine = {
  firstFoldTitle: "ASSESSORIA JURÍDICA PARA VOCÊ E SEU NEGÓCIO",
  firstFoldSubtitle: "Blog de direito e empreendedorismo para sua empresa e seus clientes",
  titleSize: "3.3vh",
  subtitleSize: "5vh",
  bold: true,
};

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <HomeWrapper>
        <FirstFold>
          <Header />
          <HeadlineWrapper>
            <Headline 
              title={foldHeadLine.firstFoldTitle}
              subtitle={foldHeadLine.firstFoldSubtitle}
              titleSize={foldHeadLine.titleSize}
              subtitleSize={foldHeadLine.subtitleSize}
              bold={foldHeadLine.bold}
            />
          </HeadlineWrapper>
        </FirstFold>
      </ HomeWrapper>
    );
  };
};

export default Home;