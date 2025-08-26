/*
    This javascript changes the #job-role content from:
    > &nbsp; Aspiring Full Stack Developer to,
    > Aspiring Full Stack Developer

    for screens that are not a laptop or pc.
*/

const job_role = document.getElementById("job-role");
if (window.innerWidth < 1024) { 
  job_role.textContent = "Aspiring Full Stack Developer";
}