import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser
}) => {
  const category = useMemo(() => {
    return categories
  }, []);
  return (
    <div>Listing Client</div>
  );
}

export default ListingClient;