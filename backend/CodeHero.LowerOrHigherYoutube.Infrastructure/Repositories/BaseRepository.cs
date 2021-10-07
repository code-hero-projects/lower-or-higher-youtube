using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories
{
    public abstract class BaseRepository<T, R> : IRepository<T, R> where T : class
    {
        private readonly DbSet<T> _dbSet;

        public BaseRepository(DbSet<T> dbSet)
        {
            _dbSet = dbSet;
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public void DeleteAsync(T entity)
        {
            _dbSet.Remove(entity);
        }

        public async Task<IEnumerable<T>> FilterAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.AsNoTracking().Where(predicate).ToListAsync();
        }

        public Task<T> GetAsync(R id)
        {
            return _dbSet.Where(entity => GetKey(entity).Equals(id)).FirstAsync();
        }

        public async Task<IEnumerable<T>> ListAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        protected abstract R GetKey(T entity);
    }
}
