import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

import Auth from "../../utils/auth";

const PostForm = () => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    postText: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, posts: [...me.posts, addPost] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(postText);
      const { data } = await addPost({
        variables: {
          postText,
          postOwner: Auth.getProfile().data.username,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
    handleClose();
  };

  // const handleSubmit = async () => {
  //   const { data } = await addPost(formState)
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      // setFormState({...formState, postText: value});
      setCharacterCount(value.length);
    }
  };

  return (
    <div>

      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p> */}
          <form className="flex-row justify-center justify-space-between-md align-center">
            <div className="addpostDiv" style={{ maxHeight: 20 }}>
              <Button className="addpostBtn" variant="outlined" onClick={handleClickOpen}>
                Click here to create a post
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>CREATE A POST</DialogTitle>
                <Grid container gap={2}>
                  <Grid item xs={12}>
                    <DialogContent>
                      <DialogContentText>
                        Describe your most recent outdoor activity.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        value={postText}
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        onChange={handleChange}
                        name="postText"
                      />
                    </DialogContent>
                  </Grid>
                  <Grid item xs={12}>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleFormSubmit}>Post</Button>
                    </DialogActions>
                  </Grid>
                </Grid>
              </Dialog>
            </div>

            {error && <div style={{ color: "red" }}>{error.message}</div>}
          </form>
        </>
      ) : (
        <p className="btn_primary">
          You need to be logged in to share your posts. Please{" "}
          <Link style={{ color: 'white' }} to="/login">login</Link> or <Link style={{ color: 'white' }} to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
