using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Core.Repositories
{
    public interface IRepository<T, R>
    {
        public Task AddAsync(T entity);
        public Task<T> GetAsync(R id);
        public Task<IEnumerable<T>> ListAsync();
        Task<IEnumerable<T>> FilterAsync(Expression<Func<T, bool>> predicate);
        public void DeleteAsync(T entity);
    }
}
