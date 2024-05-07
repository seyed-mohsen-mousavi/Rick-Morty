import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ title, children, onOpen, open }) {
  return (
    <div>
      <div
        className={`backdrop ${open ? "show" : "hidden"}`}
        onClick={() => onOpen(false)}
      ></div>
      <div className={`modal ${open ? "show" : "hidden"}`}>
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
