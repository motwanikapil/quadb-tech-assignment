import { yupResolver } from "@hookform/resolvers/yup";
import { Bell, CalendarFold, Repeat } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { add } from "../reducers/todoSlice";

const schema = yup.object({
  task: yup.string().trim().required().min(5).max(500),
});

export default function AddNewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  function onSubmit(data) {
    dispatch(add(data));
    reset();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.target.form.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        theme === "dark" ? "dark:bg-[#1f1f1f] dark:text-[#f5f5f5]" : ""
      }flex flex-col p-3 bg-[linear-gradient(0deg,rgba(53,121,55,0.1)_0%,rgba(208,255,210,0.1)_100%)] border border-transparent focus-within:border-green-700 rounded-md mt-3 box-border mb-5`}
    >
      <textarea
        type="text"
        placeholder="Add A Task"
        name="task"
        className="p-3 focus:outline-0 resize-none box-border"
        rows="6"
        onKeyDown={handleKeyDown}
        {...register("task")}
      />
      {errors.task && (
        <p className="text-red-500 text-sm">{errors.task.message}</p>
      )}
      <section className="flex items-center justify-between mt-3">
        <article className="flex items-center gap-3">
          <button type="button">
            {/* Set Reminder */}
            <Bell />
          </button>
          <button type="button">
            {/* Repeat */}
            <Repeat />
          </button>
          <button type="button">
            {/* Add Due Date */}
            <CalendarFold />
          </button>
        </article>
        <button
          type="submit"
          className="bg-green-200 text-green-700 uppercase px-3 py-1.5 rounded-lg cursor-pointer"
        >
          Add New Task
        </button>
      </section>
    </form>
  );
}
