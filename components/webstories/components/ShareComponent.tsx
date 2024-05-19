"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { faPaperPlane, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Snackbar from "@mui/material/Snackbar";

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
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [twitterShareUrl, settwitterShareUrl] = React.useState("");
  const [linkedinShareUrl, setlinkedinShareUrl] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(`${window.location.href}`).catch((error) => {
      alert(`Not able to copy the code due to ${error}`);
    });
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      settwitterShareUrl(
        `https://twitter.com/share?url=${encodeURIComponent(
          window.location.href
        )}`
      );
      setlinkedinShareUrl(
        `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          window.location.href
        )}`
      );
    }
  }, []);

  return (
    <React.Fragment>
      <FontAwesomeIcon
        icon={faPaperPlane}
        onClick={handleClickOpen}
        className=" text-slate-200"
      />

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
          <div className=" flex flex-col gap-5 justify-center items-center">
            <p className=" font-bold justify-start mt-2">Share this webstories on these Platform</p>
            <div className=" flex flex-row gap-10">
              <div className="text-xl m-1 mt-1.5 text-black transition-colors duration-300 hover:text-blue-500 flex flex-col">
                <button
                  className=" bg-secondary-300  text-sm rounded-base p-1 hover:bg-blue-500   text-slate-50 duration-300 rounded-full"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mx-1 text-slate-300   p-1 rounded-full"
                  />
                </button>
                {openSnackBar && (
                  <Snackbar
                    open={openSnackBar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackBar}
                    message="Copied to Clipboard"
                    action={action}
                  />
                )}
              </div>
              {typeof window !== "undefined" && (
                <>
                  <Link
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter-share-button text-xl m-1 mt-1.5 text-black transition-colors duration-300 hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faTwitter} fontSize={30} />
                  </Link>
                  <Link
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-share-button text-xl m-1 mt-1.5 text-black transition-colors duration-300 hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize={30} />
                  </Link>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
