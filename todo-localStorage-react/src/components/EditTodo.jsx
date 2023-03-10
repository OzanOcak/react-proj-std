export default function EditTodo({ task }) {
  return (
    <dialog id="modal-edit" open>
      <article>
        <header>
          <a
            href="#close"
            aria-label="Close"
            className=""
            data-target="modal-edit"
            onClick={handleClose}
          ></a>
          <span>{task}</span>
        </header>
      </article>
    </dialog>
  );
}
