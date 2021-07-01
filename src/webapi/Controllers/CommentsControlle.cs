using WebApi.Models;
using WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace WebApi.Controllers{
    [Route("api/[controller]")]
    
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly CommentService _commentService;

        public CommentsController(CommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpGet]
        public ActionResult<List<Comment>> Get() =>
            _commentService.Get();

         [HttpGet("{commentid}")]
        public ActionResult<List<Comment>> Get(int commentid) =>
            _commentService.Get(commentid);


        [HttpGet("{id}/comment", Name = "GetComment")]
        public ActionResult<Comment> GetComment(string id)
        {   Console.WriteLine(id);
            var comment = _commentService.GetComment(id);

            if (comment == null)
            {
                
                return NotFound();
            }

            return comment;
        }
        [HttpPost ("{commentid}")]
        public ActionResult<Comment> Create(Comment comment)
        {
            _commentService.Create(comment);

            return CreatedAtRoute("GetComment", new { comment.Id }, comment);
        }

        [HttpPut("{id}/comment")]
        public IActionResult Update(string id, Comment commentIn)
        {
            var comment = _commentService.GetComment(id);

            if (comment == null)
            {
                return NotFound();
            }

            _commentService.Update(id, commentIn);

            return NoContent();
        }

        
        [HttpDelete("{id}/comment")]
        public IActionResult Delete(string Id)
        {
            var comment = _commentService.GetComment(Id);

            if (comment == null)
            {
                return NotFound();
            }

            _commentService.Remove(comment.Id);

            return NoContent();
        }
        }



        

    }
      