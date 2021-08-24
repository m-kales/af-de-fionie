import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "dd-MM-yyyy")}</span>
      <style jsx>
        {`
          span {
            color: #888;
          }
        `}
      </style>
    </time>
  );
}
