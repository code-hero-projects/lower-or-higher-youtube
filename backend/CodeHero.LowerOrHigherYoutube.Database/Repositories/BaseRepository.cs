using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Repositories
{
    public abstract class BaseRepository<T> : IRepository<T> where T : class
    {
        private readonly DbSet<T> _dbSet;
        private readonly DbContext _dbContext;

        public BaseRepository(DbSet<T> dbSet, DbContext dbContext)
        {
            _dbSet = dbSet;
            _dbContext = dbContext;

            _dbContext.Database.EnsureCreated();
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

        public Task<T> GetAsync(Expression<Func<T, bool>> predicate)
        {
            return _dbSet.Where(predicate).FirstAsync();
        }

        public async Task<IEnumerable<T>> ListAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
