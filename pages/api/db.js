import db from '../../db.json';

// eslint-disable-next-line func-names
export default function (req, res) {
  res.json(db);
}
