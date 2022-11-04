import "boxicons";

export default function Item(props) {
  const { id, label, checked } = props.item;
  const thisChecked = () => {
    props.checked({
      id,
      label,
      checked: !checked,
    });
  };
  const thisDelete = () => {
    props.deleting({ id, checked });
  };
  return (
    <li className="list-item-container">
      <div className="list-item" onClick={thisChecked}>
        {props.item.label}
      </div>
      {!props.item.checked ? (
        <div className="btn-format" onClick={thisDelete}>
          <box-icon name="trash"></box-icon>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}
