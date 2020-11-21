import Head from "next/head";
import { BsChatFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { FaFlagCheckered, FaGraduationCap, FaTools } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { RiUserVoiceFill } from "react-icons/ri";
import { CoverText } from "../components/CoverText";
import { ExperienceBox } from "../components/ExperienceBox";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { LeftColumn } from "../components/LeftColumn";
import { RightColumn } from "../components/RightColumn";
import { SkillsItem } from "../components/SkillsItem";
import { SkillsList } from "../components/SkillsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentina Bacherer - Portfolio</title>
        <link rel="icon" href="/favicon-96x96.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <LeftColumn>
          <Header
            name="Valentina Bacherer"
            position="Ingeniera Industrial y desarrolladora"
            profilePicture="/img/profile-pic.jpg"
          />
          <CoverText>
            Hola soy Valentina Bacherer, la condesa de Lovelace. Soy una ingeniera y
            artista visual. Me interesa la tecnología y el arte, ambos son mundos donde 
            la creatividad es muy importante, y es posible contribuir con ideas novedosas.
            Considero que la computación es más que números, creo que puede aplicarse a otros
            campos como el arte y la música.
          </CoverText>
          <ExperienceBox
            date="Agosto 2002-2010"
            position="Desarrolladora de sistema, Clinica Montalvo"
            place="Londres, Reino Unido"
          >
            Diseño, desarrollo e implementacion del sistema de gestion de la clínica
          </ExperienceBox>
          <ExperienceBox
            date="Enero 1842"
            position="Matemática"
            place="Universidad de Londres, Reino Unido"
          >
            Traducción y mejora del articulo de la máquina analítica de Babbage
          </ExperienceBox>
        </LeftColumn>
        <RightColumn>
          <SkillsList name="Educación" icon={FaGraduationCap}>
            <SkillsItem date="Junio 1835" institution="Universidad de Londres">
              Matemática
            </SkillsItem>
            <SkillsItem date="Enero 1830">Escritora</SkillsItem>
          </SkillsList>
          <SkillsList name="Contacto" icon={GrContactInfo}>
            <SkillsItem>123-456-789</SkillsItem>
            <SkillsItem>
              <a
                href="mailto:valentina.bacherer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                valentina.bacherer@gmail.com
              </a>
            </SkillsItem>
            <SkillsItem>
              <a
                href="https://ada-school.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ada-school.org
              </a>
            </SkillsItem>
            <SkillsItem>
              Urban Rd, Nottingham NG17 8AH, United Kingdom
            </SkillsItem>
          </SkillsList>
          <SkillsList name="Lenguajes y Frameworks" icon={DiCode}>
            <SkillsItem>JavaScript</SkillsItem>
            <SkillsItem>Filemaker</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades técnicas" icon={FaTools}>
            <SkillsItem>SCRUM</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades Blandas" icon={RiUserVoiceFill}>
            <SkillsItem>Comunicación efectiva</SkillsItem>
            <SkillsItem>Touch typing</SkillsItem>
            <SkillsItem>Trabajo en equipo</SkillsItem>
          </SkillsList>
          <SkillsList name="Herramientas diseño" icon={RiUserVoiceFill}>
            <SkillsItem>Photoshop</SkillsItem>
          </SkillsList>
          <SkillsList name="Intereses" icon={FaFlagCheckered}>
            <SkillsItem>Fotografía</SkillsItem>
            <SkillsItem>Patrones de UI / UX</SkillsItem>
          </SkillsList>
          <SkillsList name="Idiomas" icon={BsChatFill}>
            <SkillsItem>Inglés</SkillsItem>
            <SkillsItem>Español</SkillsItem>
          </SkillsList>
        </RightColumn>
      </Layout>
    </>
  );
}
