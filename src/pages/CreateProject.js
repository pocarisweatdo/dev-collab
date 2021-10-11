import { AppBar } from "../components";

function CreateProject() {
  return (
    <div class="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <form class="flex flex-col px-96 pb-24">
        <div class="text-gray-800 font-roboto font-medium text-5xl mt-10 mb-10">
          Create New Project
        </div>
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-4">
          Project Name
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="name"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-4">
          Project Description
        </label>
        <textarea
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 h-60 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="description"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-4">
          Additional Links
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="links"
        />
        <label class="text-gray-800 font-roboto font-medium text-3xl mb-4">
          Add Collaborators
        </label>
        <input
          class="border-2 border-light-blue-500 border-opacity-100 rounded-xl py-2 px-4 mb-6 focus:outline-none focus:bg-white focus:shadow"
          type="text"
          name="collaborators"
        />
        <input
          class="rounded-3xl py-2 w-28 mt-10"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default CreateProject;
