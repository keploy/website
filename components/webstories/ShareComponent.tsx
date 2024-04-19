import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import LinkedIn icon from brand icons set
import { useRouter } from "next/router";
import Link from "next/link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //   const router = useRouter();
  //   const currentURL = encodeURIComponent(`keploy.io/${router.basePath + router.asPath}`);
  const twitterShareUrl = `https://twitter.com/share?url=`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=`;
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faPaperPlane} onClick={handleClickOpen} />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          className="m-5 border-none flex flex-row gap-10 items-center"
        >
          <div className="text-xl m-1 text-black flex flex-col">
            <button className=" bg-slate-600 rounded-lg m-1">share</button>
          <p>Get Link</p>
          </div>
          <Link
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-share-button text-xl m-1 text-black transition-colors duration-300 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <p>Share on X</p>
          </Link>
          <Link
            href={linkedinShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-share-button text-xl m-1 text-black transition-colors duration-300 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>Share on X</p>
          </Link>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
