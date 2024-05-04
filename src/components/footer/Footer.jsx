import React from "react";
import "./Footer.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {logo} from "../../assets/images/index";


function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', 
    maxHeight: '90vh', 
    overflowY: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <img src={logo} alt="logo JC-PLOMBERIE" />
          <p>JC Plomberie</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Liens</h4>
          <a href="#Accueil">Accueil</a>
          <a href="#Services">Services</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="app__footer-links_div">
          <h4>Société</h4>
          <p onClick={handleOpen}>Mentions légales</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Nous trouver</h4>
          <p>4 rue de l'Egalité - 59580 Emerchicourt</p>
          <p>06 60 73 20 36</p>
          <p>jc.plomberie@laposte.net</p>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>© 2024 JC-PLOMBERIE. Tous droits réservés.</p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="scrollbar">
            <Typography
              id="transition-modal-title"
              variant="h4"
              component="h2"
              sx={{ mb: 2 , textAlign: 'center',color: '#5586ca'}}
            >
              Mentions Légales
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: '#5586ca' }}>
              Article 1 : Mentions Légales
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              L'édition du site https://jc-plomberie.fr est assurée par
              JC-Plomberie, immatriculée sous le numéro SIRET 390527174, située
              au 4 rue de l'égalité, 59580 Emerchicourt, France.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Adresse e-mail : jc.plomberie@laposte.net
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Téléphone : 06 60 73 20 36
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Le Directeur de la publication est Jean Charles Leteneur
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              L’hébergeur du site https://jc-plomberie.fr est la société Vercel, Inc,
              dont le siège social est situé au 340 Street Lemon Ave #4133 Walnut CA 91789,
              United State.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: '#5586ca' }}>
              Article 2 : Accès au site
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Le site est accessible gratuitement à tout utilisateur disposant
              d'un accès à Internet. Tous les coûts afférents à l'accès au site,
              que ce soient les frais matériels, logiciels ou d'accès à
              Internet, sont exclusivement à la charge de l'utilisateur. Il est
              seul responsable du bon fonctionnement de son équipement
              informatique ainsi que de son accès à Internet.{" "}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Certaines sections du site sont réservées aux membres après leur inscription et nécessitent pour l'utilisateur de fournir des informations personnelles. L'utilisateur s'engage à fournir des informations exactes.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: '#5586ca' }}>
            Article 3 : Collecte des données
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Le site https://jc-plomberie.fr respecte la vie privée de ses utilisateurs et se conforme aux lois en vigueur sur la protection des données personnelles. Le site ne collecte aucune donnée personnelle, ne dispose pas de base de données pour récupérer les informations des clients et n'utilise pas de cookies.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Les communications par e-mail sont utilisées uniquement à des fins professionnelles pour répondre aux requêtes des clients.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold",color: '#5586ca' }}>
            Article 4 : Propriété intellectuelle
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Tous les contenus présents sur le site https://jc-plomberie.fr, incluant, sans limitation, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de JC-Plomberie. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" , color: '#5586ca'}}>
            Article 5 : Responsabilité
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Les informations fournies sur le site https://jc-plomberie.fr sont présentées à titre indicatif et général sans garantie de complétude, de perfection, ni d'actualité des données diffusées. Malgré des mises à jour régulières, JC-Plomberie ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold", color: '#5586ca' }}>
            Article 6 : Droit applicable et attribution de juridiction
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Tout litige en relation avec l’utilisation du site https://jc-plomberie.fr est soumis au droit français. En l'absence de résolution amiable, les tribunaux français seront seuls compétents pour traiter ce litige.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
            Pour toute question relative à l'application de ces mentions légales, vous pouvez contacter le gestionnaire du site à l'adresse fournie à l'ARTICLE 1.
            </Typography>
            </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Footer;
