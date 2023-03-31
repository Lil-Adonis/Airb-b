import React from "react";


type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
    <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between flex-wrap">
    <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
    <img src="https://www.airbnb.com.br/static/images/logo/logo-225x225.png" alt="Airbnb logo" className="h-12 mb-4" />
    <p className="text-sm">© Airbnb, Inc. Todos os direitos reservados</p>
    </div>
    <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
    <h4 className="text-lg mb-4 font-medium">Sobre</h4>
    <ul className="text-sm">
    <li className="mb-2"><a href="#">Como funciona o Airbnb</a></li>
    <li className="mb-2"><a href="#">Sala de imprensa</a></li>
    <li className="mb-2"><a href="#">Airbnb Plus</a></li>
    <li className="mb-2"><a href="#">Airbnb Luxe</a></li>
    <li className="mb-2"><a href="#">HotelTonight</a></li>
    <li><a href="#">Airbnb for Work</a></li>
    </ul>
    </div>
    <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
    <h4 className="text-lg mb-4 font-medium">Comunidade</h4>
    <ul className="text-sm">
    <li className="mb-2"><a href="#">Diversidade e pertencimento</a></li>
    <li className="mb-2"><a href="#">Acessibilidade</a></li>
    <li className="mb-2"><a href="#">Convidar amigos</a></li>
    <li><a href="#">Airbnb Associates</a></li>
    </ul>
    </div>
    <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
    <h4 className="text-lg mb-4 font-medium">Anfitrião</h4>
    <ul className="text-sm">
    <li className="mb-2"><a href="#">Hospedar no Airbnb</a></li>
    <li className="mb-2"><a href="#">Hospedagem responsável</a></li>
    <li><a href="#">Airbnb.org</a></li>
    </ul>
    </div>
    </div>
    <div className="flex justify-between flex-wrap pt-8">
    <div className="text-sm">
    <a href="#">Política de Privacidade</a>
    <span className="mx-2">·</span>
    <a href="#">Termos</a>
    <span className="mx-2">·</span>
    <a href="#">Mapa do Site</a>
    <span className="mx-2">·</span>
    <a href="#">Detalhes da Empresa</a>
    </div>
    <div className="text-sm">
    <p>Feito com ♥ em São Francisco</p>
    </div>
    </div>
    </div>
    </div>
    );
    }
    
    export default Footer;
