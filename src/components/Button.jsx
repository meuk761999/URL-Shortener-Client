import { ClipBoard ,DustbinIcon} from '@@/icons/Icons';
export const CopyButton = ({copied,onClick})=>{
    return (  <button onClick={onClick}  type="button"className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
    <ClipBoard fill={copied ? "currentColor" : "none"} />
  </button>)
}
export const DeleteButton = ({deleted,onClick})=>{
    return (  <button onClick={onClick}  type="button"className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
    <DustbinIcon />
  </button>)
}