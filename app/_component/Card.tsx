type UserPropsType = {
  user: {
    name: string;
    age: number;
    email: any;
  };
};

export const Card = (props: UserPropsType) => {
  const { user } = props;
  return (
    <div>
      <div className="bg-amber-400 w-[200px] h-100px">
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
