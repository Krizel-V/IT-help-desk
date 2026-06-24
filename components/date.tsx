import { isValid, format } from 'date-fns'; 

export default function PostDate({ dateString }: { dateString: string | undefined }) {
  if (!dateString) {
    return <span>—</span>;
  }

  const date = new Date(dateString); 
  if (!isValid(date)) {
    return <span>Invalid date</span>; 
  }

  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}