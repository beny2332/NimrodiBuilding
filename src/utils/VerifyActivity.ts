import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  const roleHierarchy = roles

  const userRoleIndex = roleHierarchy.indexOf(role)
  const requiredRoleIndex = activities.indexOf(activity)

  return userRoleIndex >= requiredRoleIndex
};

export default useIsVerified;
