
export interface Memory {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Our First Date",
    date: "Jan 15, 2023",
    image: "https://images.unsplash.com/photo-1522264074411-6384bc89373b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "That amazing dinner at our favorite restaurant where we talked until closing time."
  },
  {
    id: 2,
    title: "Beach Trip",
    date: "May 20, 2023",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "The weekend we spent at the beach building sandcastles and watching the sunset."
  },
  {
    id: 3,
    title: "Concert Night",
    date: "Aug 10, 2023",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "When we danced all night to our favorite band under the stars."
  },
  {
    id: 4,
    title: "Hiking Adventure",
    date: "Oct 5, 2023",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "That challenging hike we conquered together, the view from the top was worth it!"
  },
  {
    id: 5,
    title: "Winter Wonderland",
    date: "Dec 24, 2023",
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Our first Christmas together, building snowmen and drinking hot chocolate."
  }
];

export interface Gift {
  id: number;
  title: string;
  description: string;
}

export const gifts: Gift[] = [
  {
    id: 1,
    title: "Dinner Date",
    description: "A romantic dinner at your favorite restaurant"
  },
  {
    id: 2,
    title: "Weekend Getaway",
    description: "A surprise weekend trip to a destination you've always wanted to visit"
  },
  {
    id: 3,
    title: "Special Gift",
    description: "Something special I picked just for you (check under your pillow!)"
  }
];

export interface FriendMessage {
  id: number;
  name: string;
  message: string;
}

export const friendMessages: FriendMessage[] = [
  {
    id: 1,
    name: "Sarah",
    message: "Happy birthday! You're such an amazing friend and I hope your day is as wonderful as you are!"
  },
  {
    id: 2,
    name: "Mike",
    message: "Wishing you the happiest of birthdays! May your day be filled with joy and laughter!"
  },
  {
    id: 3,
    name: "Lisa",
    message: "Happy birthday to one of the most caring people I know! Hope your day is fantastic!"
  },
  {
    id: 4,
    name: "John",
    message: "Another year older and another year more fabulous! Have an amazing birthday celebration!"
  }
];
