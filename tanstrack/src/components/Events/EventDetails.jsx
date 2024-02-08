import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const {
    data,
    isLoading: isFetchLoading,
    isError: isFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ["events",  params.id],
    queryFn: (meta) => fetchEvent({ id: params.id, ...meta }),
  });

  const {
    mutate,
    isPending: isDeletePending,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: function () {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      }),
        navigate("../");
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function onHandleDelete() {
    mutate({ id: params.id });
  }
  let formattedDate;
  if (data) {
    formattedDate = new Date(data.date).toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2> Are you sure?</h2>
          <p>
            Do you want to delete this event? this action cannot be undone
          </p>
          <div className="form-actions">
            <button onClick={handleStopDelete} className="button-text"> Cancel </button>
            <button onClick={onHandleDelete} className="button"> Delete </button>
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isFetchLoading && <p> Event loading </p>}
        {isFetchError && (
          <ErrorBlock
            title="Failed to fetch the item"
            message={
              fetchError.info?.message || "Failed to delete, try again later."
            }
          />
        )}
        {isDeleteError && (
          <ErrorBlock
            title="Failed to delete the item"
            message={
              deleteError.info?.message || "Failed to delete, try again later."
            }
          />
        )}
        {!isFetchLoading && !isFetchError && (
          <>
            <header>
              <h1> {data.title} </h1>
              {isDeletePending && <LoadingIndicator />}
              {!isDeletePending && (
                <nav>
                  <button onClick={handleStartDelete}>Delete</button>
                  <Link to="edit">Edit</Link>
                </nav>
              )}
            </header>
            <div id="event-details-content">
              <img src={`http://localhost:3000/${data.image}`} alt="" />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location"> {data.location} </p>
                  <time dateTime={`MM-dd-yyyy-$Todo-Time`}>
                    {formattedDate} @ {data.time}
                  </time>
                </div>
                <p id="event-details-description">{data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
