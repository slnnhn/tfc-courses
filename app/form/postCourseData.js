import { createClient } from "../utils/supabase/client";
const supabase = createClient();
export async function postCourses({ courseTitle, courseDescription }) {
  const { data, error } = await supabase
    .from("courses")
    .insert([
      {
        title: courseTitle,
        description: courseDescription,
        time: 100,
      },
    ])
    .select("*");

  return { data, error };
}

export async function postModules({ moduleTitle, courseId, moduleId }) {
  const { data, error } = await supabase
    .from("modules")
    .insert([
      {
        title: moduleTitle,
        course_id: courseId,
      },
    ])
    .select("*");

  return { data, error };
}
